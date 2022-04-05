import { createForm } from '@formily/core';
import * as NextUI from '@formily/next';
import { createSchemaField, FormProvider } from '@formily/react';
import { memo } from 'react';
import registryUi from './registryUi';

const form = createForm();

const CreateFormContainer = ({ schema, components }) => {
  const registriedUi = registryUi(components, NextUI);

  const SchemaField = createSchemaField({
    components: registriedUi,
  });
  return (
    <FormProvider form={form}>
      {/* <Form labelCol={5} wrapperCol={16}> */}
      <SchemaField schema={schema} />
      {/* </Form> */}
    </FormProvider>
  );
};

export default memo(CreateFormContainer);
