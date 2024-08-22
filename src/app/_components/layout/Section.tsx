import { ComponentProps } from 'react';

interface SectionProps extends ComponentProps<'section'> {
  className?: string;
}

const Section = ({ children, className = '', ...props }: SectionProps) => {
  return (
    <section
      className={`h-full flex flex-col bg-white rounded-lg p-2 shadow-sm ${className} `}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
// max-h-[40rem]
