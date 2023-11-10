// Import React and any other necessary libraries
import React from 'react';

// Define your component
const NewPacenoteForm = () => {
  return (
    <div>
        <form>
            {/* Left turns */}
            <label>
                <input type="radio" name="radioGroup" value="LAcute" /> Left Acute
            </label>
            <label>
                <input type="radio" name="radioGroup" value="LHairpin" /> Left Hairpin
            </label>
            <label>
                <input type="radio" name="radioGroup" value="LSquare" /> Left Square
            </label>
            <label>
                <input type="radio" name="radioGroup" value="L1" /> Left 1
            </label>
            <label>
                <input type="radio" name="radioGroup" value="L2" /> Left 2
            </label>
            <label>
                <input type="radio" name="radioGroup" value="L3" /> Left 3
            </label>
            <label>
                <input type="radio" name="radioGroup" value="L4" /> Left 4
            </label>
            <label>
                <input type="radio" name="radioGroup" value="L5" /> Left 5
            </label>
            <label>
                <input type="radio" name="radioGroup" value="L6" /> Left 6
            </label>
            <label>
                <input type="radio" name="radioGroup" value="LSlight" /> Left Slight
            </label>

            {/* Right turns */}
            <label>
                <input type="radio" name="radioGroup" value="RAcute" /> Right Acute
            </label>
            <label>
                <input type="radio" name="radioGroup" value="RHairpin" /> Right Hairpin
            </label>
            <label>
                <input type="radio" name="radioGroup" value="RSquare" /> Right Square
            </label>
            <label>
                <input type="radio" name="radioGroup" value="R1" /> Right 1
            </label>
            <label>
                <input type="radio" name="radioGroup" value="R2" /> Right 2
            </label>
            <label>
                <input type="radio" name="radioGroup" value="R3" /> Right 3
            </label>
            <label>
                <input type="radio" name="radioGroup" value="R4" /> Right 4
            </label>
            <label>
                <input type="radio" name="radioGroup" value="R5" /> Right 5
            </label>
            <label>
                <input type="radio" name="radioGroup" value="R6" /> Right 6
            </label>
            <label>
                <input type="radio" name="radioGroup" value="RSlight" /> Right Slight
            </label>

            {/* Events */}
            <label>
                <input type="radio" name="radioGroup" value="Straight" /> Straight
            </label>
            <label>
                <input type="radio" name="radioGroup" value="LChicane" /> Left chicane
            </label>
            <label>
                <input type="radio" name="radioGroup" value="RChicane" /> Right chicane
            </label>
            <label>
                <input type="radio" name="radioGroup" value="Dip" /> Dip
            </label>
            <label>
                <input type="radio" name="radioGroup" value="Bump" /> Bump
            </label>
            <label>
                <input type="radio" name="radioGroup" value="Crest" /> Crest
            </label>
            <label>
                <input type="radio" name="radioGroup" value="Jump" /> Jump
            </label>
            <label>
                <input type="radio" name="radioGroup" value="Twisting" /> Twisting
            </label>
            <label>
                <input type="radio" name="radioGroup" value="Watersplash" /> Watersplash
            </label>

            {/* Notes */}
            <label>
                Additional notes: <input type="text" name="notes" />
            </label>
            
            {/* Modifiers */}
            <label>
                <input type="checkbox" name="Cut" /> Cut
            </label>
            <label>
                <input type="checkbox" name="Don't cut" /> Don't cut
            </label>
            <label>
                <input type="checkbox" name="Caution" /> Caution
            </label>
            <label>
                <input type="checkbox" name="Danger" /> Danger
            </label>
            <label>
                <input type="checkbox" name="Tightens" /> Tightens
            </label>
            <label>
                <input type="checkbox" name="Widens" /> Widens
            </label>
            
            {/* Submit */}
            <button type="submit">Add</button>
        </form>
    </div>
  );
};

// Export your component
export default NewPacenoteForm;