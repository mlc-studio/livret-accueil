'use client'

import { useConfig } from "@payloadcms/ui";
import { TextFieldProps } from "payload";
import React from "react";

const CustomTextField: React.FC<TextFieldProps> = (props) => {
  const { config } = useConfig();

  return (
    <pre>
      {config.serverURL}
    </pre>
  )
}

export default CustomTextField;
