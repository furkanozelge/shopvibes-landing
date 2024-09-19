import { Box, Image, Heading, keyframes } from "@chakra-ui/react";


const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

function TrustedByBrands() {
  const brandLogos = [
    "https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f62c_Schlaraffia_Logo_wei%C3%9Fer_hintergrund_01%201.svg",
    "https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f74a_HanseHomeLogo.png",
    "https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f74b_DC-Living-Logo%25201-p-500.png",
    "https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f635_xonox.png",
    "https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f71b_tradepoint_logo_black-p-500.png",
    "https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f6f9_DFP%252BDESIGN%252Btransparent-01%252Bcopy-p-500.jpeg",
    "https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f62a_wolf-moebel-gmbh-und-co-kg-logo-vector-p-500.png",
    "https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f627_neofacture_white.png",
    "https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f71e_hero-img.png-p-500.webp",
    "https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/667927dfccadf47c6117889a_Zafferano_Black%20Logo_Image-p-500.png",
    "https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/6601b0aa1e05b13596e85ca4_logo-light%201-2-p-500.png",
  ];

  return (
    <Box py={10} overflow="hidden">
      <Heading size="md" color="#1C3DDA"textAlign="center" mb={6}>
        Trusted by Innovators Worldwide
      </Heading>

      <Box display="flex" alignItems="center" whiteSpace="nowrap" animation={`${scroll} 30s linear infinite`}>
        {brandLogos.concat(brandLogos).map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Brand Logo ${index + 1}`}
            maxH="80px"
            mx={10}
            display="inline-block"
          />
        ))}
      </Box>
    </Box>
  );
}

export default TrustedByBrands;
