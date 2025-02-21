import MetaModelingUX from './components/MetaModelingUX';

export default function UQ() {
    return (
        <MetaModelingUX tabTitle="Uncertainty Quantification" headerType="application-header">
            {/* TODO input distributions (see how I do it to generate Dakota file)
            either give option to user or also populate with defaults */}
            {/* TODO in fact, need to generate the workflow first -- this is a great excuse to get the UQ for the new T */}
            {/* but before moving there, advance on the workflow. Simply load a pre-generated plot (e.g. when Python 
            finishes (do mockup with time.sleep)) return the path with an image and plot it */}

            {/* TODO run button; implement Flask / FastAPI to run these, and generate plots */}

            {/* TODO plot generated image */}
        </MetaModelingUX >
    );
}