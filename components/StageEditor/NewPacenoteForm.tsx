"use client";
import React, { useState } from 'react';


const NewPacenoteForm = () => {
    const [formData, setFormData] = useState({
      action: '',
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
        action: '',
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
            <label><input type="radio" name="action" value="LAcute" checked={formData.action === 'LAcute'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Left Acute</label>
            <label><input type="radio" name="action" value="LHairpin" checked={formData.action === 'LHairpin'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Left Hairpin</label>
            <label><input type="radio" name="action" value="LSquare" checked={formData.action === 'LSquare'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Left Square</label>
            <label><input type="radio" name="action" value="L1" checked={formData.action === 'L1'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Left 1</label>
            <label><input type="radio" name="action" value="L2" checked={formData.action === 'L2'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Left 2</label>
            <label><input type="radio" name="action" value="L3" checked={formData.action === 'L3'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Left 3</label>
            <label><input type="radio" name="action" value="L4" checked={formData.action === 'L4'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Left 4</label>
            <label><input type="radio" name="action" value="L5" checked={formData.action === 'L5'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Left 5</label>
            <label><input type="radio" name="action" value="L6" checked={formData.action === 'L6'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Left 6</label>
            <label><input type="radio" name="action" value="LSlight" checked={formData.action === 'LSlight'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Left Slight</label>
        
            {/* Right turns */}
            <label><input type="radio" name="action" value="RAcute" checked={formData.action === 'RAcute'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Right Acute</label>
            <label><input type="radio" name="action" value="RHairpin" checked={formData.action === 'RHairpin'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Right Hairpin</label>
            <label><input type="radio" name="action" value="RSquare" checked={formData.action === 'RSquare'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Right Square</label>
            <label><input type="radio" name="action" value="R1" checked={formData.action === 'R1'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Right 1</label>
            <label><input type="radio" name="action" value="R2" checked={formData.action === 'R2'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Right 2</label>
            <label><input type="radio" name="action" value="R3" checked={formData.action === 'R3'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Right 3</label>
            <label><input type="radio" name="action" value="R4" checked={formData.action === 'R4'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Right 4</label>
            <label><input type="radio" name="action" value="R5" checked={formData.action === 'R5'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Right 5</label>
            <label><input type="radio" name="action" value="R6" checked={formData.action === 'R6'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Right 6</label>
            <label><input type="radio" name="action" value="RSlight" checked={formData.action === 'RSlight'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Right Slight</label>
        
            {/* Events */}
            <label><input type="radio" name="action" value="Straight" checked={formData.action === 'Straight'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Straight</label>
            <label><input type="radio" name="action" value="LChicane" checked={formData.action === 'LChicane'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Left chicane</label>
            <label><input type="radio" name="action" value="RChicane" checked={formData.action === 'RChicane'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Right chicane</label>
            <label><input type="radio" name="action" value="Dip" checked={formData.action === 'Dip'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Dip</label>
            <label><input type="radio" name="action" value="Bump" checked={formData.action === 'Bump'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Bump</label>
            <label><input type="radio" name="action" value="Crest" checked={formData.action === 'Crest'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Crest</label>
            <label><input type="radio" name="action" value="Jump" checked={formData.action === 'Jump'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Jump</label>
            <label><input type="radio" name="action" value="Twisting" checked={formData.action === 'Twisting'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Twisting</label>
            <label><input type="radio" name="action" value="Watersplash" checked={formData.action === 'Watersplash'} onChange={(e) => setFormData({ ...formData, action: e.target.value })}/> Watersplash</label>

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