/*!
 * Copyright 2023, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ReactDOM from "react-dom";
import { configurationSchema, uiSchema, widgets } from "../src/configuration-schema";
import React from "react";
import Form from "@rjsf/material-ui";
import { config } from "process";

const updateWidget = (data: Record<string, string>) => {
  // const el = document.querySelector("#preview > :first-child");

  // for (const key in data) {
  //   el?.setAttribute(key, data[key]);
  // }
  console.log("@@@@@@@",data);
};

ReactDOM.render(
  <Form
    schema={configurationSchema}
    uiSchema={uiSchema}
    widgets={widgets}
    onSubmit={(e) => {
      updateWidget(e.formData);
    }}
    autoComplete={"off"}
  />,
  document.getElementById("config")
);
