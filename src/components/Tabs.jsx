export default function Tabs({ children, buttons, ButtonContainer = "div" }) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
