import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box bg="gray.800" py={16}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between" wrap="wrap">
            <Box flex={1} pr={8}>
              <Heading as="h1" size="2xl" color="white" mb={4}>
                Discover Your Next Adventure
              </Heading>
              <Text fontSize="xl" color="white" mb={8}>
                Explore new destinations, plan your trips, and create unforgettable memories with our travel app.
              </Text>
              <Stack direction={["column", "row"]} spacing={4}>
                <Link href="#" isExternal>
                  <Button leftIcon={<FaApple />} size="lg" colorScheme="gray">
                    App Store
                  </Button>
                </Link>
                <Link href="#" isExternal>
                  <Button leftIcon={<FaGooglePlay />} size="lg" colorScheme="gray">
                    Google Play
                  </Button>
                </Link>
              </Stack>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzExNTc0NDI1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Travel App" />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="gray.900" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Key Features
          </Heading>
          <Flex wrap="wrap" justify="space-between">
            <Box flex={["1 1 100%", "1 1 30%"]} mb={8} color="white">
              <Image src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMGRpc2NvdmVyeXxlbnwwfHx8fDE3MTE1NzQ0MjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Destination Discovery" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Destination Discovery
              </Heading>
              <Text>Discover new and exciting destinations based on your preferences and interests.</Text>
            </Box>
            <Box flex={["1 1 100%", "1 1 30%"]} mb={8} color="white">
              <Image src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmlwJTIwcGxhbm5pbmd8ZW58MHx8fHwxNzExNTc0NDI2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Trip Planning" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Trip Planning
              </Heading>
              <Text>Easily plan your trips with itinerary suggestions, booking options, and travel guides.</Text>
            </Box>
            <Box flex={["1 1 100%", "1 1 30%"]} mb={8} color="white">
              <Image src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBjb21tdW5pdHl8ZW58MHx8fHwxNzExNTc0NDI2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Travel Community" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Travel Community
              </Heading>
              <Text>Connect with fellow travelers, share experiences, and get inspired for your next adventure.</Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="gray.700" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            What Our Users Say
          </Heading>
          <Flex wrap="wrap" justify="space-between">
            <Box flex={["1 1 100%", "1 1 45%"]} mb={8} bg="gray.600" p={6} borderRadius="md" boxShadow="md" color="white">
              <Text fontSize="xl" mb={4}>
                "This app has completely transformed the way I plan my trips. It's so easy to discover new places and create the perfect itinerary."
              </Text>
              <Text fontWeight="bold">- Sarah Johnson</Text>
            </Box>
            <Box flex={["1 1 100%", "1 1 45%"]} mb={8} bg="gray.600" p={6} borderRadius="md" boxShadow="md" color="white">
              <Text fontSize="xl" mb={4}>
                "I love the travel community feature. It's great to connect with like-minded people and get inspired by their adventures."
              </Text>
              <Text fontWeight="bold">- Michael Thompson</Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="gray.800" py={16}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={8} color="white">
            Start Your Adventure Today
          </Heading>
          <Text fontSize="xl" mb={8} color="white">
            Download our app and unlock a world of travel possibilities.
          </Text>
          <Stack direction={["column", "row"]} spacing={4} justify="center">
            <Link href="#" isExternal>
              <Button leftIcon={<FaApple />} size="lg" colorScheme="blue">
                App Store
              </Button>
            </Link>
            <Link href="#" isExternal>
              <Button leftIcon={<FaGooglePlay />} size="lg" colorScheme="blue">
                Google Play
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
