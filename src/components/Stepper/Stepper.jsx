import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Step from '@mui/material/Step';

const steps = [
    { label: 'Shipment created', icon: <FaBeer /> },
    { label: 'The shipment has been received', icon: <MailOutlineIcon /> },
    { label: 'Shipment is on its way', icon: <LockOpenIcon /> },
    { label: 'Shipment is dilevered', icon: <LockOpenIcon /> },

];

function MyStepper() {
    const QontoStepIconRoot = styled('div') < { ownerState: { active?: boolean } } > (
        ({ theme, ownerState }) => ({
            color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
            display: 'flex',
            height: 22,
            alignItems: 'center',
        …(ownerState.active && {
        color: '#784af4',
    }),
        '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
            zIndex: 1,
                fontSize: 18,
        },
    '& .QontoStepIcon-circle': {
        width: 8,
            height: 8,
                borderRadius: '50%',
                    backgroundColor: 'currentColor',
        },
}),
        );
const [activeStep, setActiveStep] = React.useState(0);

const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

return (
    <div>
        <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
            {steps.map((step) => (
                <Step key={step.label}>
                    <StepLabel StepIconComponent={step.icon}>{step.label}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
            {steps.map((step) => (
                <Step key={step.label}>
                    <StepLabel StepIconComponent={step.icon}>{step.label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </div>
);
}

export default MyStepper;
