import React from 'react';
import ScrollAnimation from './ScrollAnimation';

// Function to check if element should be animated based on its type/class
const shouldAnimate = (element: React.ReactElement) => {
  const animatableElements = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'img', 'div', 'section',
    'button', 'a', 'span', 'li', 'ul', 'ol', 'article', 'aside'
  ];
  
  // Check if element type is in our list of animatable elements
  if (typeof element.type === 'string' && animatableElements.includes(element.type)) {
    return true;
  }
  
  // Check for specific classes that should be animated
  const elementClasses = element.props.className?.split(' ') || [];
  const animatableClasses = ['card', 'container', 'section', 'animate-on-scroll'];
  return elementClasses.some((className: string) => animatableClasses.includes(className));
};

// Function to get animation direction based on element type/position
const getAnimationDirection = (element: React.ReactElement, index: number): 'up' | 'down' | 'left' | 'right' => {
  // Headers and text elements animate up
  if (element.type === 'h1' || element.type === 'h2' || element.type === 'p') {
    return 'up';
  }
  
  // Images alternate between left and right
  if (element.type === 'img') {
    return index % 2 === 0 ? 'left' : 'right';
  }
  
  // Cards and grid items animate up with alternating delays
  if (element.props.className?.includes('card')) {
    return 'up';
  }
  
  // Default animation direction
  return 'up';
};

// Function to get animation delay based on element position
const getAnimationDelay = (index: number): number => {
  return index * 0.1; // 0.1s delay between each element
};

const withScrollAnimation = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithScrollAnimationComponent(props: P) {
    const addAnimationToElement = (element: React.ReactNode, index = 0): React.ReactNode => {
      if (!React.isValidElement(element)) {
        return element;
      }

      const children = React.Children.map(element.props.children, (child, childIndex) =>
        addAnimationToElement(child, childIndex)
      );

      if (shouldAnimate(element)) {
        return (
          <ScrollAnimation
            key={index}
            direction={getAnimationDirection(element, index)}
            delay={getAnimationDelay(index)}
            className={element.props.className || ''}
          >
            {React.cloneElement(element, { ...element.props, children })}
          </ScrollAnimation>
        );
      }

      return React.cloneElement(element, { ...element.props, children });
    };

    return addAnimationToElement(<WrappedComponent {...props} />) as React.ReactElement;
  };
};

export default withScrollAnimation; 