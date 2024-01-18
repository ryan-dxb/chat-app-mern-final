import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { FC } from "react";

interface AuthInputFieldProps {
  control: any;
  name: string;
  placeholder: string | undefined;
}

const AuthInputField: FC<AuthInputFieldProps> = ({
  control,
  name,
  placeholder,
}) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <FormControl>
          <Input
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            placeholder={placeholder}
            className="h-10 bg-transparent border border-primary/60 hover:bg-primary/10 hover:border-primary/80 transition-colors duration-200"
          />
        </FormControl>
      )}
    />
  );
};

export default AuthInputField;
