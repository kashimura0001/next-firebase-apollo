import React, { VFC, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, Box, Button, Text, Link } from "@chakra-ui/react";

const ProfileNew: VFC = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    // TODO: プロフィール登録処理を実装する
    alert("hoge");
  };

  return (
    <Flex w="full" align="center" justifyContent="center">
      <Box w="320px" mt="120px">
        <Box textAlign="center">
          <Text fontSize="2xl">Welcome!</Text>
        </Box>
        <Box mt={10} textAlign="left" w="100%">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel fontSize="sm">名前</FormLabel>
              <Input
                size="lg"
                placeholder="名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
                backgroundColor="gray.100"
              />
            </FormControl>
            <Button
              type="submit"
              size="lg"
              colorScheme="blue"
              mt={12}
              width="full"
              variant="outline"
            >
              登録する
            </Button>
            <Box textAlign="center" mt={8}>
              <Link color="blue.500" href="/login">
                ログイン画面へ戻る
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProfileNew;
