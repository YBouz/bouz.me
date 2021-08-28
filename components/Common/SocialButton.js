import { IconButton, VisuallyHidden } from '@chakra-ui/react';

const SocialButton = ({ icon, label, href }) => {
  return (
    <IconButton
      as="a"
      href={href}
      rel="noopener"
      target="_blank"
      aria-label={label}
      icon={icon}
      isRound
      transition={'background 0.3s ease'}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
    </IconButton>
  );
};

export default SocialButton;
