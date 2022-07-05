import { useFindAllAuthorsWithCommentsQuery } from "~/generated/graphql";
import { NetworkStatus } from "@apollo/client";

const Home = () => {
  const {
    data: authorsWithComments,
    error,
    loading,
    refetch,
    networkStatus,
  } = useFindAllAuthorsWithCommentsQuery({
    notifyOnNetworkStatusChange: true, // Le statut de la requête est notifié à chaque changement de statut
  });

  if (networkStatus === NetworkStatus.refetch)
    return "Rafraîchissement en cours ...";
  if (loading) return "Chargement en cours ...";
  if (error) return `Erreur ! ${error.message}`;

  return (
    <div>
      <h1>Liste des auteurs</h1>

      {authorsWithComments && (
        <ul>
          {authorsWithComments.author.map(({ id, name, comments }) => (
            <li key={id}>
              {name} ({comments.length})
              <ul>
                {comments.map(({ id, title }) => (
                  <li key={id}>{title}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => refetch()}>Rafraîchir</button>
    </div>
  );
};

export default Home;
