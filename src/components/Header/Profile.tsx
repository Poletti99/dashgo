import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Victor Poletti</Text>
          <Text color="gray.300" fontSize="small">
            victor.poletti@email.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Victor Poletti"
        src="https://github.com/poletti99.png"
      />
    </Flex>
  );
}
