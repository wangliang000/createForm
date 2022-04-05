import { createForm } from '@formily/core';
import * as NextUI from '@formily/next';
import { createSchemaField, FormProvider } from '@formily/react';
import { memo } from 'react';
const ui = { DatePicker: 'DatePicker', FormItem: 'FormItem' };


const SchemaField = createSchemaField({
  components: registryUi,
});

const form = createForm();

const CreateFormContainer = ({ schema }) => {
  return (
    <FormProvider form={form}>
      {/* <Form labelCol={5} wrapperCol={16}> */}
      <SchemaField schema={schema} />
      {/* </Form> */}
    </FormProvider>
  );
};

export default memo(CreateFormContainer);
