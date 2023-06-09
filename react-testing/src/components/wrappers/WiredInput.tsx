import * as React from 'react';
import { createComponent, EventName } from '@lit-labs/react';
import { WiredInput as _WiredInput } from 'wired-elements/lib/wired-input.js';


type EventTargetWithValue = EventTarget & { value: string };

export interface ChangeEvent extends Omit<Event, 'target'> {
  target: EventTargetWithValue
}

export const WiredInput = createComponent({
  react: React,
  tagName: 'wired-input',
  elementClass: _WiredInput,
  events: {
    onChange: 'input' as EventName<ChangeEvent>,
    onchange: 'input'
  }
});
