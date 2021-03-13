import React, { VFC, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, Box, Button, Text, Link } from "@chakra-ui/react";
import { PasswordInput } from "../../components/PasswordInput";

const Login: VFC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // TODO: ログイン処理を実装する
    alert("hoge");
  };

  return (
    <Flex w="full" align="center" justifyContent="center">
      <Box w="320px" mt="120px">
        <Box textAlign="center">
          <Text fontSize="2xl">ログイン</Text>
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
                backgroundColor="gray.100"
              />
            </FormControl>
            <FormControl isRequired mt={8}>
              <FormLabel fontSize="sm">パスワード</FormLabel>
              <PasswordInput
                placeholder="パスワード"
                size="lg"
                value={password}
                backgroundColor="gray.100"
                onChange={(e) => setPassword(e.target.value)}
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
              ログイン
            </Button>
            <Box textAlign="center" mt={8}>
              <Link color="blue.500" href="/password/reset">
                パスワードをお忘れの方はこちら
              </Link>
            </Box>
            <Box textAlign="center" mt={4}>
              <Link color="blue.500" href="/signup">
                未登録の方はこちら
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
