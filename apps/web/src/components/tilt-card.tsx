'use client';

import type * as React from 'react';
import Tilt from 'react-parallax-tilt';
import { cn } from '@/lib/utils';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  className?: string;
}

export function TiltCard({
  children,
  className,
  tiltMaxAngleX = 3,
  tiltMaxAngleY = 3,
  ...props
}: TiltCardProps) {
  return (
    <Tilt tiltMaxAngleX={tiltMaxAngleX} tiltMaxAngleY={tiltMaxAngleY}>
      <div className={cn('glass-card', className)} {...props}>
        {children}
      </div>
    </Tilt>
  );
}
