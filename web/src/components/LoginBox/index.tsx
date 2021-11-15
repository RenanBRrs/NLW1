import { VscGithubInverted } from 'react-icons/vsc';

import { useContext } from 'react';

import styles from './styles.module.scss';
import { AuthContext } from '../../contexts/auth';

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);

  return (
    <div className={styles.loginBoxWapper}>
      <strong>Entre e compartilhe seua mensagem.</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size='22' />
        Entre com o Github
      </a>
    </div>
  );
}
