import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MethodList } from "./method/MethodList";
import { MethodCreate } from "./method/MethodCreate";
import { MethodEdit } from "./method/MethodEdit";
import { MethodShow } from "./method/MethodShow";
import { ClassModelList } from "./classModel/ClassModelList";
import { ClassModelCreate } from "./classModel/ClassModelCreate";
import { ClassModelEdit } from "./classModel/ClassModelEdit";
import { ClassModelShow } from "./classModel/ClassModelShow";
import { FunctionModelList } from "./functionModel/FunctionModelList";
import { FunctionModelCreate } from "./functionModel/FunctionModelCreate";
import { FunctionModelEdit } from "./functionModel/FunctionModelEdit";
import { FunctionModelShow } from "./functionModel/FunctionModelShow";
import { FileList } from "./file/FileList";
import { FileCreate } from "./file/FileCreate";
import { FileEdit } from "./file/FileEdit";
import { FileShow } from "./file/FileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CodeGraphService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Method"
          list={MethodList}
          edit={MethodEdit}
          create={MethodCreate}
          show={MethodShow}
        />
        <Resource
          name="ClassModel"
          list={ClassModelList}
          edit={ClassModelEdit}
          create={ClassModelCreate}
          show={ClassModelShow}
        />
        <Resource
          name="FunctionModel"
          list={FunctionModelList}
          edit={FunctionModelEdit}
          create={FunctionModelCreate}
          show={FunctionModelShow}
        />
        <Resource
          name="File"
          list={FileList}
          edit={FileEdit}
          create={FileCreate}
          show={FileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
