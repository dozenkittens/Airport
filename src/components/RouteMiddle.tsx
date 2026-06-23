import { Box, Flex, Text } from '@mantine/core';
import "@mantine/core/styles.css";
import { IconPlane } from '@tabler/icons-react';

export default function RouteMiddle() {
  return (
    <Flex
      direction="column"
      align="center"
      gap={6}
      w={110}
      style={{ flexShrink: 0 }}
    >
      {/* Duration */}
      <Text
        ff="'JetBrains Mono', monospace"
        fz={11}
        c="#374e6b"
        style={{ letterSpacing: '0.04em' }}
      >
        1h 30m
      </Text>

      {/* Line track */}
      <Flex align="center" w="100%">
        {/* Left dot */}
        <Box
          w={5}
          h={5}
          style={{
            borderRadius: '50%',
            background: '#2563eb',
            flexShrink: 0,
          }}
        />

        {/* Line with plane */}
        <Box
          style={{
            flex: 1,
            height: 1,
            background: 'linear-gradient(90deg, #2563eb55, #38bdf855)',
            position: 'relative',
          }}
        >
          <IconPlane
            size={13}
            color="#4a8fd4"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>

        {/* Right dot */}
        <Box
          w={5}
          h={5}
          style={{
            borderRadius: '50%',
            background: '#38bdf8',
            flexShrink: 0,
          }}
        />
      </Flex>

      {/* Timezone */}
      <Text
        ff="'JetBrains Mono', monospace"
        fz={10}
        c="#2a3d57"
        style={{ letterSpacing: '0.04em' }}
      >
        UTC +3
      </Text>
    </Flex>
  );
}
