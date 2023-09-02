import React from "react";
import testStyles from "./Test.module.scss";
import { Text } from "@chakra-ui/react";

const Test = () => {
  return (
    <div className={testStyles["Test"]}>
      <Text>Test</Text>
    </div>
  );
};

export default Test;
