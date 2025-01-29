import { ExternalLink } from "@tamagui/lucide-icons";
import {
  Anchor,
  Button,
  Card,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  ScrollView,
  Separator,
  Text,
  XStack,
  YStack,
  Image,
  SizableText,
} from "tamagui";
import { ToastControl } from "app/CurrentToast";
import { Mail } from "@tamagui/lucide-icons";
import type { PropsWithChildren } from "react";
import { Link } from "expo-router";

const HContainer = ({ children }: PropsWithChildren) => (
  <XStack items="center" gap={10}>
    {children}
  </XStack>
);

const BContainer = ({ children }: PropsWithChildren) => (
  <XStack items="center" gap={10} my="$2">
    {children}
  </XStack>
);

export default function TabOneScreen() {
  return (
    <ScrollView
      flex={1}
      px="$5"
      bg={"$background"}
      contentContainerStyle={{ py: "$5" }}
    >
      <HContainer>
        <H1>Heading 1</H1>
        <Text>Corresponds to weight $10, size $10, line height $10 etc</Text>
      </HContainer>
      <HContainer>
        <H2>Heading 2</H2>
        <Text>Corresponds to weight $9, size $9, line height $9 etc</Text>
      </HContainer>
      <HContainer>
        <H3>Heading 3</H3>
        <Text>Corresponds to weight $8, size $8, line height $8 etc</Text>
      </HContainer>
      <HContainer>
        <H4 theme="accent">Heading 4 IN ACCENT THEME</H4>
        <Text>Corresponds to weight $7, size $7, line height $7 etc</Text>
      </HContainer>
      <HContainer>
        <H5>Heading 5</H5>
        <Text>Corresponds to weight $6, size $6, line height $6 etc</Text>
      </HContainer>
      <HContainer>
        <H6>Heading 6</H6>
        <Text>Corresponds to weight $5, size $5, line height $5 etc</Text>
      </HContainer>

      <Separator width="100%" my="$5" />

      <BContainer>
        <Button
          $gtXs={{
            size: "$5",
          }}
          icon={Mail}
          size="$4"
        >
          Size 5
        </Button>
        <Text>
          Inspect element and see how padding = 24, which is space value $5.
          Height = 52, which is size token $5
        </Text>
      </BContainer>
      <BContainer>
        <Button icon={Mail} size="$4">
          Size 4
        </Button>
        <Text>Size 4, height = 44px. This is default since $true: 44</Text>
        <Button icon={Mail}>Size default</Button>
      </BContainer>
      <BContainer>
        <Button icon={Mail} size="$3">
          Size 3
        </Button>
        <Text>
          See how icon and font scale down automatically according to parents
          size. Padding here is 13, which is space value $3
        </Text>
      </BContainer>

      <BContainer>
        <Button iconAfter={Mail} size="$2">
          Size 2
        </Button>
        <Text>Icon after also scales</Text>
      </BContainer>

      <Separator my="$5" />

      <H3 mb="$4">Variants</H3>

      <BContainer>
        <Button variant="outlined" theme="accent" iconAfter={Mail} size="$4">
          Secondary
        </Button>
        <Text>
          Here the "outlined" prop gives the button a 2px border, then we set
          the theme to accent
        </Text>
      </BContainer>

      <Separator my="$5" />

      <H3 mb="$4">Sizing stuff</H3>
      <Card elevate size="$4" width="$15" height="$20" bordered>
        <Card.Header padded bg="yellow">
          <H2 mb="$3">Card Header</H2>
          <Paragraph size="$3">
            See how padding in this header is derived from the size of the card
            - size = $4, $4 space = 18px so padding is 18
          </Paragraph>
        </Card.Header>
        <YStack p="$6">
          <Text>Padding here is $6 so different from the other padding</Text>
          <Link href="https://github.com/tamagui/tamagui/blob/main/code/ui/card/src/Card.tsx">
            <SizableText
              textDecorationLine="underline"
              size="$3"
              theme="accent"
              pt="$8"
            >
              Source code
            </SizableText>
          </Link>
        </YStack>
        <Card.Footer padded bg="$skyline">
          <XStack flex={1}>
            <Text themeInverse>Padding here also derived from card size</Text>
          </XStack>
          <Button>Invest</Button>
        </Card.Footer>
      </Card>
    </ScrollView>
  );
}
