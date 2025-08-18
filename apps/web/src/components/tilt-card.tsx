'use client';

import { motion } from 'motion/react';
import type * as React from 'react';
import Tilt from 'react-parallax-tilt';
import { cn } from '@/lib/utils';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function TiltCard({
  children,
  className,
  tiltMaxAngleX = 3,
  tiltMaxAngleY = 3,
  colSpan = 1,
  rowSpan = 1,
  ...props
}: TiltCardProps) {
  const gridClasses = cn(
    'flex p-px',
    colSpan === 1 && 'lg:col-span-1',
    colSpan === 2 && 'lg:col-span-2',
    colSpan === 3 && 'lg:col-span-3',
    rowSpan === 1 && 'min-h-fit',
    rowSpan === 2 && 'lg:row-span-2 lg:min-h-0'
  );

  return (
    <motion.div
      className={gridClasses}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Tilt
        className="w-full"
        tiltMaxAngleX={tiltMaxAngleX}
        tiltMaxAngleY={tiltMaxAngleY}
      >
        <div
          className={cn('glass-card h-full w-full overflow-hidden', className)}
          {...props}
        >
          {children}
        </div>
      </Tilt>
    </motion.div>
  );
}
