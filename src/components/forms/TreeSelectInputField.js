import React from "react";
import { TreeSelect } from "antd";

import FormField from "./FormField";

import { transformarListaTreeSelectAntd } from "../../js/ui-util";

const TreeSelectInputField = props => {
  //TODO: filtrar para apacer apenas os itens habilitados

  const tree = props.tree
    ? props.tree
    : transformarListaTreeSelectAntd(
        props.list,
        props.keyFieldName,
        props.descriptionFieldName,
        props.fullDescriptionFieldName,
        props.enabledList
      );

  // const fieldValue = props.form.getFieldValue(props.name);

  return (
    <FormField
      {...props}
      component={
        <TreeSelect
          showSearch
          style={{ width: "100%" }}
          // value={[fieldValue]}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          treeData={tree}
          placeholder={props.placeholder}
          // onChange={e =>
          //   props.form.setFieldsValue({ [props.name]: e })
          // }
          {...props.treeSelectOptions}
        />
      }
    />
  );
};

export default TreeSelectInputField;
