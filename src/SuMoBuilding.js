import FileSelector from './components/FileSelector';
import SuMoTypeSelector from './components/SuMoTypeSelector';
import OutputResponseSelector from './components/OutputResponseSelector';
import MetaModelingUX from './components/MetaModelingUX';


function SuMoBuildingValidation() {
    return (
        < MetaModelingUX tabTitle="SuMo Building & Validation" headerType="sumo-header">
            <FileSelector defaultFileName="./README.md" />
            <SuMoTypeSelector />
            <OutputResponseSelector />
            {/* ## TODO need to be able to access the state defined in the above. Objective from the Coursera. */}
            {/* TODO for now, be able to run Dakota (assume default inputs from the above) */}


            {/* TODO this is also including SuMo building: choose jobs, dump into a csv file for Dakota, then call python and generate SuMo, then save and register it
            This all should also eventually be done with Functions API
            However, for now, for simplicity, simply choose the file and build the SuMo on the fly (I already have those scripts)
            The rest of the pipeline (getting outputs of Dakota, and plotting & showing) should stay the same */}

        </MetaModelingUX>
    );
}

export default SuMoBuildingValidation;
