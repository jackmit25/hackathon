import { Sparkles, Code, Zap, Rocket, Heart, Star } from 'lucide-react';
import { 
  Box, 
  Flex, 
  VStack, 
  Container, 
  Button, 
  Heading, 
  Text,
  Avatar,
} from '@/genie-ui';

export default function Home() {

  return (
    <Box className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      <Container maxWidth="lg" className="py-16">
        <VStack spacing={8} className="text-center">
          {/* Hero Icon */}
          <Box className="relative">
            <Flex justify="center" align="center" className="mb-4">
              <Box className="p-4 bg-blue-100 rounded-full">
                <Sparkles className="w-16 h-16 text-blue-500" />
              </Box>
            </Flex>
          </Box>

          {/* Main Heading */}
          <Heading as="h1" size="3xl" className="text-gray-800 font-bold">
            Welcome to Genie UI - JACK MITCHELL STYLE
          </Heading>

          {/* Feature Cards */}
          <Flex 
            direction="row" 
            justify="center" 
            align="center" 
            gap={8} 
            wrap={true}
            className="mt-2"
          >
            <Box className="flex items-center space-x-2 bg-white rounded-lg p-4 shadow-sm">
              <Code className="w-5 h-5 text-green-500" />
              <Text size="sm" className="text-gray-700">Next.js 14</Text>
            </Box>
            <Box className="flex items-center space-x-2 bg-white rounded-lg p-4 shadow-sm">
              <Zap className="w-5 h-5 text-yellow-500" />
              <Text size="sm" className="text-gray-700">React 18</Text>
            </Box>
            <Box className="flex items-center space-x-2 bg-white rounded-lg p-4 shadow-sm">
              <Rocket className="w-5 h-5 text-purple-500" />
              <Text size="sm" className="text-gray-700">TypeScript</Text>
            </Box>
          </Flex>

          {/* Component Showcase */}
          <Box className="mt-12 p-8 bg-white rounded-xl shadow-lg">
            <Heading as="h2" size="lg" className="mb-6 text-gray-800">
              Component Showcase
            </Heading>
            
            <VStack spacing={6}>
              {/* Avatars */}
              <Box>
                <Text size="md" className="text-gray-600 mb-4">
                  Avatar Components
                </Text>
                <Flex justify="center" align="center" gap={4}>
                  <Avatar 
                    name="John Doe" 
                    size="sm"
                    badgeIcon={<Star className="w-2 h-2" />}
                    badgeColorString="blue"
                  />
                  <Avatar name="Jane Smith" size="md" />
                  <Avatar 
                    name="Mike Johnson" 
                    size="lg"
                    badgeIcon={<Heart className="w-3 h-3" />}
                    badgeColorString="pink"
                  />
                </Flex>
              </Box>

              {/* Buttons */}
              <Box>
                <Text size="md" className="text-gray-600 mb-4">
                  Button Variants
                </Text>
                <Flex justify="center" align="center" gap={4} wrap={true}>
                  <Button variant="solid" size="md">
                    Solid Button
                  </Button>
                  <Button variant="bordered" size="md">
                    Bordered Button
                  </Button>
                  <Button variant="light" size="md">
                    Light Button
                  </Button>
                  <Button variant="gradient" size="md">
                    Gradient Button
                  </Button>
                </Flex>
              </Box>

              {/* Typography */}
              <Box className="text-center">
                <Text size="md" className="text-gray-600 mb-4">
                  Typography System
                </Text>
                <VStack spacing={3}>
                  <Heading as="h3" size="xl" className="text-gray-800">
                    This is a Heading XL
                  </Heading>
                  <Heading as="h4" size="lg" className="text-gray-700">
                    This is a Heading LG
                  </Heading>
                  <Text size="lg" className="text-gray-600">
                    This is large text for descriptions
                  </Text>
                  <Text size="md" className="text-gray-600">
                    This is medium text for body content
                  </Text>
                  <Text size="sm" className="text-gray-500">
                    This is small text for captions
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
