"use client"
import React, { useEffect } from 'react';
interface IndexPage {

}

const IndexPage: React.FC<IndexPage> = (props) => {
  useEffect(() => {
    // Redirect to /stages
    window.location.href = '/stages';
  }, []);

  return (
    <div>
      <h1>This is the index page of PacenoteMaster</h1>
    </div>
  )
}
export default IndexPage;