"use client";
import React, { useState } from 'react';


const NewPacenoteForm = () => {
    const [formData, setFormData] = useState({
      turnGroup: '',
      notes: '',
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
    
    
      // Log form data to the console
      console.log(formData);
    

      setFormData({
        turnGroup: '',
        notes: '',
        Cut: false,
        DontCut: false,
        Caution: false,
        Danger: false,
        Tightens: false,
        Widens: false,
      });
    };
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            {/* Left turns */}
            <label><input type="radio" name="turnGroup" value="LAcute" checked={formData.turnGroup === 'LAcute'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Left Acute</label>
            <label><input type="radio" name="turnGroup" value="LHairpin" checked={formData.turnGroup === 'LHairpin'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Left Hairpin</label>
            <label><input type="radio" name="turnGroup" value="LSquare" checked={formData.turnGroup === 'LSquare'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Left Square</label>
            <label><input type="radio" name="turnGroup" value="L1" checked={formData.turnGroup === 'L1'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Left 1</label>
            <label><input type="radio" name="turnGroup" value="L2" checked={formData.turnGroup === 'L2'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Left 2</label>
            <label><input type="radio" name="turnGroup" value="L3" checked={formData.turnGroup === 'L3'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Left 3</label>
            <label><input type="radio" name="turnGroup" value="L4" checked={formData.turnGroup === 'L4'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Left 4</label>
            <label><input type="radio" name="turnGroup" value="L5" checked={formData.turnGroup === 'L5'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Left 5</label>
            <label><input type="radio" name="turnGroup" value="L6" checked={formData.turnGroup === 'L6'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Left 6</label>
            <label><input type="radio" name="turnGroup" value="LSlight" checked={formData.turnGroup === 'LSlight'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Left Slight</label>
        
            {/* Right turns */}
            <label><input type="radio" name="turnGroup" value="RAcute" checked={formData.turnGroup === 'RAcute'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Right Acute</label>
            <label><input type="radio" name="turnGroup" value="RHairpin" checked={formData.turnGroup === 'RHairpin'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Right Hairpin</label>
            <label><input type="radio" name="turnGroup" value="RSquare" checked={formData.turnGroup === 'RSquare'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Right Square</label>
            <label><input type="radio" name="turnGroup" value="R1" checked={formData.turnGroup === 'R1'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Right 1</label>
            <label><input type="radio" name="turnGroup" value="R2" checked={formData.turnGroup === 'R2'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Right 2</label>
            <label><input type="radio" name="turnGroup" value="R3" checked={formData.turnGroup === 'R3'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Right 3</label>
            <label><input type="radio" name="turnGroup" value="R4" checked={formData.turnGroup === 'R4'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Right 4</label>
            <label><input type="radio" name="turnGroup" value="R5" checked={formData.turnGroup === 'R5'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Right 5</label>
            <label><input type="radio" name="turnGroup" value="R6" checked={formData.turnGroup === 'R6'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Right 6</label>
            <label><input type="radio" name="turnGroup" value="RSlight" checked={formData.turnGroup === 'RSlight'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Right Slight</label>
        
            {/* Events */}
            <label><input type="radio" name="turnGroup" value="Straight" checked={formData.turnGroup === 'Straight'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Straight</label>
            <label><input type="radio" name="turnGroup" value="LChicane" checked={formData.turnGroup === 'LChicane'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Left chicane</label>
            <label><input type="radio" name="turnGroup" value="RChicane" checked={formData.turnGroup === 'RChicane'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Right chicane</label>
            <label><input type="radio" name="turnGroup" value="Dip" checked={formData.turnGroup === 'Dip'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Dip</label>
            <label><input type="radio" name="turnGroup" value="Bump" checked={formData.turnGroup === 'Bump'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Bump</label>
            <label><input type="radio" name="turnGroup" value="Crest" checked={formData.turnGroup === 'Crest'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Crest</label>
            <label><input type="radio" name="turnGroup" value="Jump" checked={formData.turnGroup === 'Jump'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Jump</label>
            <label><input type="radio" name="turnGroup" value="Twisting" checked={formData.turnGroup === 'Twisting'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Twisting</label>
            <label><input type="radio" name="turnGroup" value="Watersplash" checked={formData.turnGroup === 'Watersplash'} onChange={(e) => setFormData({ ...formData, turnGroup: e.target.value })}/> Watersplash</label>

            {/* Notes */}
            <label>Additional notes: <input type="text" name="notes"  value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} /></label>
            
            {/* Modifiers */}
            <label><input type="checkbox" name="Cut" value="true" checked={formData.Cut} onChange={(e) => setFormData({ ...formData, Cut: e.target.checked })} /> Cut</label>
            <label><input type="checkbox" name="DontCut" value="true" checked={formData.DontCut} onChange={(e) => setFormData({ ...formData, DontCut: e.target.checked })} /> Don't cut</label>
            <label><input type="checkbox" name="Caution" value="true" checked={formData.Caution} onChange={(e) => setFormData({ ...formData, Caution: e.target.checked })} /> Caution</label>
            <label><input type="checkbox" name="Danger" value="true" checked={formData.Danger} onChange={(e) => setFormData({ ...formData, Danger: e.target.checked })} /> Danger</label>
            <label><input type="checkbox" name="Tightens" value="true" checked={formData.Tightens} onChange={(e) => setFormData({ ...formData, Tightens: e.target.checked })} /> Tightens</label>
            <label><input type="checkbox" name="Widens" value="true" checked={formData.Widens} onChange={(e) => setFormData({ ...formData, Widens: e.target.checked })} /> Widens</label>
  
            {/* Submit */}
            <button type="submit">Add</button>
        </form>
    </div>
  );
};

// Export your component
export default NewPacenoteForm;