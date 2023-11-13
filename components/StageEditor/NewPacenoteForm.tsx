
import React, { useState } from 'react';

interface NewPacenoteFormProps {
  onSubmit: (formData: any) => void;
}

const NewPacenoteForm: React.FC<NewPacenoteFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
      Action: '',
      Notes: '',
      Cut: false,
      DontCut: false,
      Caution: false,
      Danger: false,
      Tightens: false,
      Widens: false,
    });
  
    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Send form submit data to parent
        onSubmit(formData);
        
        setFormData({
          Action: '',
          Notes: '',
          Cut: false,
          DontCut: false,
          Caution: false,
          Danger: false,
          Tightens: false,
          Widens: false,
        });
    };

  // Check if any radio button is selected
  const isRadioSelected = Object.values(formData).some((value) => typeof value === 'string' && value !== '');
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            {/* Left turns */}
            <label><input type="radio" name="Action" value="LAcute" checked={formData.Action === 'LAcute'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Left Acute</label>
            <label><input type="radio" name="Action" value="LHairpin" checked={formData.Action === 'LHairpin'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Left Hairpin</label>
            <label><input type="radio" name="Action" value="LSquare" checked={formData.Action === 'LSquare'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Left Square</label>
            <label><input type="radio" name="Action" value="L1" checked={formData.Action === 'L1'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Left 1</label>
            <label><input type="radio" name="Action" value="L2" checked={formData.Action === 'L2'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Left 2</label>
            <label><input type="radio" name="Action" value="L3" checked={formData.Action === 'L3'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Left 3</label>
            <label><input type="radio" name="Action" value="L4" checked={formData.Action === 'L4'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Left 4</label>
            <label><input type="radio" name="Action" value="L5" checked={formData.Action === 'L5'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Left 5</label>
            <label><input type="radio" name="Action" value="L6" checked={formData.Action === 'L6'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Left 6</label>
            <label><input type="radio" name="Action" value="LSlight" checked={formData.Action === 'LSlight'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Left Slight</label>
        
            {/* Right turns */}
            <label><input type="radio" name="Action" value="RAcute" checked={formData.Action === 'RAcute'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Right Acute</label>
            <label><input type="radio" name="Action" value="RHairpin" checked={formData.Action === 'RHairpin'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Right Hairpin</label>
            <label><input type="radio" name="Action" value="RSquare" checked={formData.Action === 'RSquare'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Right Square</label>
            <label><input type="radio" name="Action" value="R1" checked={formData.Action === 'R1'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Right 1</label>
            <label><input type="radio" name="Action" value="R2" checked={formData.Action === 'R2'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Right 2</label>
            <label><input type="radio" name="Action" value="R3" checked={formData.Action === 'R3'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Right 3</label>
            <label><input type="radio" name="Action" value="R4" checked={formData.Action === 'R4'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Right 4</label>
            <label><input type="radio" name="Action" value="R5" checked={formData.Action === 'R5'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Right 5</label>
            <label><input type="radio" name="Action" value="R6" checked={formData.Action === 'R6'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Right 6</label>
            <label><input type="radio" name="Action" value="RSlight" checked={formData.Action === 'RSlight'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Right Slight</label>
        
            {/* Events */}
            <label><input type="radio" name="Action" value="Straight" checked={formData.Action === 'Straight'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Straight</label>
            <label><input type="radio" name="Action" value="LChicane" checked={formData.Action === 'LChicane'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Left chicane</label>
            <label><input type="radio" name="Action" value="RChicane" checked={formData.Action === 'RChicane'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Right chicane</label>
            <label><input type="radio" name="Action" value="Dip" checked={formData.Action === 'Dip'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Dip</label>
            <label><input type="radio" name="Action" value="Bump" checked={formData.Action === 'Bump'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Bump</label>
            <label><input type="radio" name="Action" value="Crest" checked={formData.Action === 'Crest'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Crest</label>
            <label><input type="radio" name="Action" value="Jump" checked={formData.Action === 'Jump'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Jump</label>
            <label><input type="radio" name="Action" value="Twisting" checked={formData.Action === 'Twisting'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Twisting</label>
            <label><input type="radio" name="Action" value="Watersplash" checked={formData.Action === 'Watersplash'} onChange={(e) => setFormData({ ...formData, Action: e.target.value })}/> Watersplash</label>

            {/* Notes */}
            <label>Additional Notes: <input type="text" name="Aotes"  value={formData.Notes} onChange={(e) => setFormData({ ...formData, Notes: e.target.value })} /></label>
            
            {/* Modifiers */}
            <label><input type="checkbox" name="Cut" value="true" checked={formData.Cut} onChange={(e) => setFormData({ ...formData, Cut: e.target.checked })} /> Cut</label>
            <label><input type="checkbox" name="DontCut" value="true" checked={formData.DontCut} onChange={(e) => setFormData({ ...formData, DontCut: e.target.checked })} /> Don't cut</label>
            <label><input type="checkbox" name="Caution" value="true" checked={formData.Caution} onChange={(e) => setFormData({ ...formData, Caution: e.target.checked })} /> Caution</label>
            <label><input type="checkbox" name="Danger" value="true" checked={formData.Danger} onChange={(e) => setFormData({ ...formData, Danger: e.target.checked })} /> Danger</label>
            <label><input type="checkbox" name="Tightens" value="true" checked={formData.Tightens} onChange={(e) => setFormData({ ...formData, Tightens: e.target.checked })} /> Tightens</label>
            <label><input type="checkbox" name="Widens" value="true" checked={formData.Widens} onChange={(e) => setFormData({ ...formData, Widens: e.target.checked })} /> Widens</label>
  
            {/* Submit */}
            <button type="submit" disabled={!isRadioSelected}>Add</button>
        </form>
    </div>
  );
};

// Export your component
export default NewPacenoteForm;