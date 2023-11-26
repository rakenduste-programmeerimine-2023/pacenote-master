
import React, { useState } from 'react';
import '@/styles/NewPacenoteForm.css';

interface NewPacenoteFormProps {
  onSubmit: (formData: any) => void;
}

const NewPacenoteForm: React.FC<NewPacenoteFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
      action: '',
      notes: '',
      cut: false,
      dontcut: false,
      caution: false,
      danger: false,
      tightens: false,
      widens: false,
      icon: '',
    });
  
    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Send form submit data to parent
        onSubmit(formData);
        
        setFormData({
          action: '',
          notes: '',
          cut: false,
          dontcut: false,
          caution: false,
          danger: false,
          tightens: false,
          widens: false,
          icon: '',
        });
    };

  // Check if any radio button is selected
  const isRadioSelected = Object.values(formData).some((value) => typeof value === 'string' && value !== '');
  
  return (
    <div className='footer'>
        <form onSubmit={handleSubmit} className="icon-form">
            {/* Left turns */}
            <div className="icon-section">
              <h3>Left Turns</h3>
              <div className="icon-row">
                <label><input type="radio" name="action" value="LAcute" checked={formData.action === 'LAcute'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'LAcute.png' })}/> <img src="/PacenoteIcons/LAcute.png" alt="LAcute" className="icon-image" /></label>
                <label><input type="radio" name="action" value="LHairpin" checked={formData.action === 'LHairpin'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'LHairpin.png' })}/> <img src="/PacenoteIcons/LHairpin.png" alt="LHairpin" className="icon-image" /></label>
                <label><input type="radio" name="action" value="LSquare" checked={formData.action === 'LSquare'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'LSquare.png' })}/> <img src="/PacenoteIcons/LSquare.png" alt="LSquare" className="icon-image" /></label>
                <label><input type="radio" name="action" value="L1" checked={formData.action === 'L1'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'L1.png' })}/> <img src="/PacenoteIcons/L1.png" alt="L1" className="icon-image" /></label>
                <label><input type="radio" name="action" value="L2" checked={formData.action === 'L2'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'L2.png' })}/> <img src="/PacenoteIcons/L2.png" alt="L2" className="icon-image" /></label>
                <label><input type="radio" name="action" value="L3" checked={formData.action === 'L3'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'L3.png' })}/> <img src="/PacenoteIcons/L3.png" alt="L3" className="icon-image" /></label>
                <label><input type="radio" name="action" value="L4" checked={formData.action === 'L4'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'L4.png' })}/> <img src="/PacenoteIcons/L4.png" alt="L4" className="icon-image" /></label>
                <label><input type="radio" name="action" value="L5" checked={formData.action === 'L5'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'L5.png' })}/> <img src="/PacenoteIcons/L5.png" alt="L5" className="icon-image" /></label>
                <label><input type="radio" name="action" value="L6" checked={formData.action === 'L6'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'L6.png' })}/> <img src="/PacenoteIcons/L6.png" alt="L6" className="icon-image" /></label>
                <label><input type="radio" name="action" value="LSlight" checked={formData.action === 'LSlight'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'LSlight.png' })}/> <img src="/PacenoteIcons/LSlight.png" alt="LSlight" className="icon-image" /></label>
              </div>
            </div>
            {/* Right turns */}
            <div className="icon-section">
              <h3>Right Turns</h3>
              <div className="icon-row">
                <label><input type="radio" name="action" value="RAcute" checked={formData.action === 'RAcute'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'RAcute.png' })}/> <img src="/PacenoteIcons/RAcute.png" alt="RAcute" className="icon-image" /></label>
                <label><input type="radio" name="action" value="RHairpin" checked={formData.action === 'RHairpin'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'RHairpin.png' })}/> <img src="/PacenoteIcons/RHairpin.png" alt="RHairpin" className="icon-image" /></label>
                <label><input type="radio" name="action" value="RSquare" checked={formData.action === 'RSquare'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'RSquare.png' })}/> <img src="/PacenoteIcons/RSquare.png" alt="RSquare" className="icon-image" /></label>
                <label><input type="radio" name="action" value="R1" checked={formData.action === 'R1'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'R1.png' })}/> <img src="/PacenoteIcons/R1.png" alt="R1" className="icon-image" /></label>
                <label><input type="radio" name="action" value="R2" checked={formData.action === 'R2'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'R2.png' })}/> <img src="/PacenoteIcons/R2.png" alt="R2" className="icon-image" /></label>
                <label><input type="radio" name="action" value="R3" checked={formData.action === 'R3'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'R3.png' })}/> <img src="/PacenoteIcons/R3.png" alt="R3" className="icon-image" /></label>
                <label><input type="radio" name="action" value="R4" checked={formData.action === 'R4'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'R4.png' })}/> <img src="/PacenoteIcons/R4.png" alt="R4" className="icon-image" /></label>
                <label><input type="radio" name="action" value="R5" checked={formData.action === 'R5'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'R5.png' })}/> <img src="/PacenoteIcons/R5.png" alt="R5" className="icon-image" /></label>
                <label><input type="radio" name="action" value="R6" checked={formData.action === 'R6'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'R6.png' })}/> <img src="/PacenoteIcons/R6.png" alt="R6" className="icon-image" /></label>
                <label><input type="radio" name="action" value="RSlight" checked={formData.action === 'RSlight'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'RSlight.png' })}/> <img src="/PacenoteIcons/RSlight.png" alt="RSlight" className="icon-image" /></label>
              </div>
            </div>
            {/* Events */}
            <div className="icon-section">
              <h3>Events</h3>
              <div className="icon-row">
                <label><input type="radio" name="action" value="Straight" checked={formData.action === 'Straight'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'Straight.png' })}/> <img src="/PacenoteIcons/Straight.png" alt="Straight" className="icon-image" /></label>
                <label><input type="radio" name="action" value="LChicane" checked={formData.action === 'LChicane'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'LChicane.png' })}/> <img src="/PacenoteIcons/LChicane.png" alt="LChicane" className="icon-image" /></label>
                <label><input type="radio" name="action" value="RChicane" checked={formData.action === 'RChicane'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'RChicane.png' })}/> <img src="/PacenoteIcons/RChicane.png" alt="RChicane" className="icon-image" /></label>
                <label><input type="radio" name="action" value="Dip" checked={formData.action === 'Dip'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'Dip.png' })}/> <img src="/PacenoteIcons/Dip.png" alt="Dip" className="icon-image" /></label>
                <label><input type="radio" name="action" value="Bump" checked={formData.action === 'Bump'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'Bump.png' })}/> <img src="/PacenoteIcons/Bump.png" alt="Bump" className="icon-image" /></label>
                <label><input type="radio" name="action" value="Crest" checked={formData.action === 'Crest'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'Crest.png' })}/> <img src="/PacenoteIcons/Crest.png" alt="Crest" className="icon-image" /></label>
                <label><input type="radio" name="action" value="Jump" checked={formData.action === 'Jump'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'Jump.png' })}/> <img src="/PacenoteIcons/Jump.png" alt="Jump" className="icon-image" /></label>
                <label><input type="radio" name="action" value="Twisting" checked={formData.action === 'Twisting'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'Twisting.png' })}/> <img src="/PacenoteIcons/Twisting.png" alt="Twisting" className="icon-image" /></label>
                <label><input type="radio" name="action" value="Watersplash" checked={formData.action === 'Watersplash'} onChange={(e) => setFormData({ ...formData, action: e.target.value, icon: 'Watersplash.png' })}/> <img src="/PacenoteIcons/Watersplash.png" alt="Watersplash" className="icon-image" /></label>
              </div>
            </div>
            {/* notes */}
            <label>Additional notes: <input type="text" name="notes"  value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} /></label>
            
            {/* Modifiers */}
            <div className="icon-section">
              <h3>Modifiers</h3>
              <div className="icon-row">
                <label><input type="checkbox" name="cut" value="true" checked={formData.cut} onChange={(e) => setFormData({ ...formData, cut: e.target.checked })} /> <img src="/PacenoteIcons/Cut.png" alt="Cut" className="icon-image" /></label>
                <label><input type="checkbox" name="dontcut" value="true" checked={formData.dontcut} onChange={(e) => setFormData({ ...formData, dontcut: e.target.checked })} /> <img src="/PacenoteIcons/Dontcut.png" alt="Dontcut" className="icon-image" /></label>
                <label><input type="checkbox" name="caution" value="true" checked={formData.caution} onChange={(e) => setFormData({ ...formData, caution: e.target.checked })} /> <img src="/PacenoteIcons/Caution.png" alt="Caution" className="icon-image" /></label>
                <label><input type="checkbox" name="danger" value="true" checked={formData.danger} onChange={(e) => setFormData({ ...formData, danger: e.target.checked })} /> <img src="/PacenoteIcons/Danger.png" alt="Danger" className="icon-image" /></label>
                <label><input type="checkbox" name="tightens" value="true" checked={formData.tightens} onChange={(e) => setFormData({ ...formData, tightens: e.target.checked })} /> <img src="/PacenoteIcons/Tightens.png" alt="Tightens" className="icon-image" /></label>
                <label><input type="checkbox" name="widens" value="true" checked={formData.widens} onChange={(e) => setFormData({ ...formData, widens: e.target.checked })} /> <img src="/PacenoteIcons/Widens.png" alt="Widens" className="icon-image" /></label>
                </div>
            </div>
            {/* Submit */}
            <button type="submit" disabled={!isRadioSelected}>Add</button>
        </form>
    </div>
  );
};

// Export your component
export default NewPacenoteForm;