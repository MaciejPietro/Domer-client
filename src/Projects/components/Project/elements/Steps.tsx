import { useState } from "react";
import { Stepper, Button, Group, Title } from "@mantine/core";

function Steps() {
  const [active, setActive] = useState(1);
  const nextStep = () => {
    setActive((current) => (current < 3 ? current + 1 : current));
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg mt-10">
      <Title order={2} size="h4">
        Etapy
      </Title>

      <Stepper active={active} onStepClick={setActive} className="mt-10">
        <Stepper.Step label="First step" description="Create an account">
          <span className="text-sm">Step 1 content: Create an account</span>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          <span className="text-sm">Step 2 content: Verify email</span>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          <span className="text-sm">Step 3 content: Get full access</span>
        </Stepper.Step>
        <Stepper.Completed>
          <span className="text-sm">
            Completed, click back button to get to previous step
          </span>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </div>
  );
}

export default Steps;
