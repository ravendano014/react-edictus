import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

// react

const GET_item_INFO = gql`
                            {
                              getActos {
                                      id_acto
                                      acto
                              }
                            }
                            `
function App() {
  const { data, loading, error } = useQuery(GET_item_INFO);

  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error</p>;

  console.log(data);

  return (
    <React.Fragment>
      <h1>
        React Client for Edictus API
  
</h1>

      <p>
        <a href="https://edictus.herokuapp.com/graphql">Edictus API</a> Basic Info: Sistema de Gestión de Edictos Judiciales.
        
      </p>
      <div className="container">

        {data && data.getActos &&
          data.getActos.map((item, index) => (

            <div key={index} className="card">

              <div class="card-body">
                <h3>{item.id_acto}</h3>
                <p>
                  {item.acto}
                </p>
              </div>
            </div>

          ))}
      </div>
    </React.Fragment>
  );
}

export default App;
