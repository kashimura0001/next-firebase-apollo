import React, { VFC, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, Box, Button, Text, Link } from "@chakra-ui/react";
import { PasswordInput } from "../../components/PasswordInput";

const SignUp: VFC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // TODO: アカウント登録処理を実装する
    alert("hoge");
  };

  return (
    <Flex w="full" align="center" justifyContent="center">
      <Box w="320px" mt="130px">
        <Box textAlign="center">
          <Text fontSize="2xl">アカウント登録</Text>
        </Box>
        <Box mt={10} textAlign="left" w="100%">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel fontSize="sm">メールアドレス</FormLabel>
              <Input
                type="email"
                size="lg"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired mt={8}>
              <FormLabel fontSize="sm">パスワード</FormLabel>
              <PasswordInput
                placeholder="パスワード"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              size="lg"
              colorScheme="blue"
              mt={12}
              width="full"
            >
              登録する
            </Button>
            <Box textAlign="center" mt={8}>
              <Link color="blue.500" href="/login">
                アカウントをお持ちの方はこちら
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
