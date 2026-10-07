import { useState, useEffect } from "react";
import {type Immobilier} from "../type/interface"


export default function UserProfile() {
  // 2. Déclaration des états React (comme on l'a vu dans ton hook useGithub)
  const [immobili, setImmobilier] = useState<Immobilier[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Le useEffect pour déclencher le fetch au chargement du composant
  useEffect(() => {
    async function fetchUser() {
  
      try {
        // on active le mode chargement et on efface les anciennes erreurs
        setLoading(true);
        setError(null);

        // Le voyage
        const response = await fetch(`https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json
`);

        // Le contrôle de sécurité
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }

        // L'ouverture du colis
        const result: Immobilier[]  = await response.json();
        setImmobilier(result);
        
      // On sauvegarde les données dans le state

      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Une erreur est survenue.");
        }
      } finally {
        setLoading(false); // On arrête le chargement dans tous les cas
      }
    }


    fetchUser();
  }, []); // Tableau vide [] = s'exécute une seule fois au chargement du composant
  //il faut retourner les trois variables pour pouvoir les utiliser dans le JSX
  return {immobili, loading, error} ; 
};