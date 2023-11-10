// Import React and any other necessary libraries
import React from 'react';
import PacenoteFormComponent from './PacenoteFormComponent';

// Define your component
const NewPacenoteForm = () => {
  return (
    <div>
        <form>
            {/* Left turns */}
            <PacenoteFormComponent type="radio" name="LAcute" value="LAcute" label="Left Acute" />
            <PacenoteFormComponent type="radio" name="LHairpin" value="LHairpin" label="Left Hairpin" />
            <PacenoteFormComponent type="radio" name="LSquare" value="LSquare" label="Left Square" />
            <PacenoteFormComponent type="radio" name="L1" value="L1" label="Left 1" />
            <PacenoteFormComponent type="radio" name="L2" value="L2" label="Left 2" />
            <PacenoteFormComponent type="radio" name="L3" value="L3" label="Left 3" />
            <PacenoteFormComponent type="radio" name="L4" value="L4" label="Left 4" />
            <PacenoteFormComponent type="radio" name="L5" value="L5" label="Left 5" />
            <PacenoteFormComponent type="radio" name="L6" value="L6" label="Left 6" />
            <PacenoteFormComponent type="radio" name="LSlight" value="LSlight" label="Left Slight" />
        
            {/* Right turns */}
            <PacenoteFormComponent type="radio" name="RAcute" value="RAcute" label="Right Acute" />
            <PacenoteFormComponent type="radio" name="RHairpin" value="RHairpin" label="Right Hairpin" />
            <PacenoteFormComponent type="radio" name="RSquare" value="RSquare" label="Right Square" />
            <PacenoteFormComponent type="radio" name="R1" value="R1" label="Right 1" />
            <PacenoteFormComponent type="radio" name="R2" value="R2" label="Right 2" />
            <PacenoteFormComponent type="radio" name="R3" value="R3" label="Right 3" />
            <PacenoteFormComponent type="radio" name="R4" value="R4" label="Right 4" />
            <PacenoteFormComponent type="radio" name="R5" value="R5" label="Right 5" />
            <PacenoteFormComponent type="radio" name="R6" value="R6" label="Right 6" />
            <PacenoteFormComponent type="radio" name="RSlight" value="RSlight" label="Right Slight" />
        
            {/* Events */}
            <PacenoteFormComponent type="radio" name="Straight" value="Straight" label="Straight" />
            <PacenoteFormComponent type="radio" name="LChicane" value="LChicane" label="Left chicane" />
            <PacenoteFormComponent type="radio" name="RChicane" value="RChicane" label="Right chicane" />
            <PacenoteFormComponent type="radio" name="Dip" value="Dip" label="Dip" />
            <PacenoteFormComponent type="radio" name="Bump" value="Bump" label="Bump" />
            <PacenoteFormComponent type="radio" name="Crest" value="Crest" label="Crest" />
            <PacenoteFormComponent type="radio" name="Jump" value="Jump" label="Jump" />
            <PacenoteFormComponent type="radio" name="Twisting" value="Twisting" label="Twisting" />
            <PacenoteFormComponent type="radio" name="Watersplash" value="Watersplash" label="Watersplash" />
        
            {/* Notes */}
            <label>
              Additional notes: <input type="text" name="notes" />
            </label>
            
            {/* Modifiers */}
            <PacenoteFormComponent type="checkbox" name="Cut" value="true" label="Cut" />
            <PacenoteFormComponent type="checkbox" name="DontCut" value="true" label="Don't cut" />
            <PacenoteFormComponent type="checkbox" name="Caution" value="true" label="Caution" />
            <PacenoteFormComponent type="checkbox" name="Danger" value="true" label="Danger" />
            <PacenoteFormComponent type="checkbox" name="Tightens" value="true" label="Tightens" />
            <PacenoteFormComponent type="checkbox" name="Widens" value="true" label="Widens" />
            
            {/* Submit */}
            <button type="submit">Add</button>
        </form>
    </div>
  );
};

// Export your component
export default NewPacenoteForm;