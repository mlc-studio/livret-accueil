'use client'

import React from 'react';
import { fieldBaseClass, TextInput, useField } from "@payloadcms/ui";

const SlugCustomField = (props: any) => {
  const { field: { admin: { description } } } = props;

  const { value, setValue } = useField<string>({});

  function slugify(str: string) {
    return String(str)
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  const handleValueChange = (value: any) => {
    const inputValue = value as string;
    const preSlug = inputValue.toLowerCase().replace(/ /g, '-');
    const slug = slugify(preSlug);
    setValue(slug);
  }

  return (
    <div className={fieldBaseClass}>
      <TextInput
        {...props.field}
        value={value}
        onChange={(e: any) => handleValueChange(e.target.value)}
        description={description}
      />
    </div >
  )
}

export default SlugCustomField;
