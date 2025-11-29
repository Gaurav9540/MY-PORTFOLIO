import ansible from '../app/assets/svg/skills/ansible.svg';
import ssh from '../app/assets/svg/skills/ssh.svg';
import jenkins from '../app/assets/svg/skills/jenkins.svg';
import github from '../app/assets/svg/skills/github.svg';
import terraform from '../app/assets/svg/skills/terraform.svg';
import firewall from '../app/assets/svg/skills/firewall.svg';
import java from '../app/assets/svg/skills/java.svg';
import html from '../app/assets/svg/skills/html.svg';
import css from '../app/assets/svg/skills/css.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import gcp from '../app/assets/svg/skills/gcp.svg';
import git from '../app/assets/svg/skills/git.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nginx from '../app/assets/svg/skills/nginx.svg';
import react from '../app/assets/svg/skills/react.svg';
import kubernetes from '../app/assets/svg/skills/kubernetes.svg'
import linux from '../app/assets/svg/skills/linux.svg'
import cloudflare from '../app/assets/svg/skills/cloudflare.svg'


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'ansible':
      return ansible;
    case 'ssh':
      return ssh;
    case 'jenkins':
      return jenkins;
    case 'docker':
      return docker;
    case 'github':
      return github;
    case 'terraform':
      return terraform;
    case 'firewall':
      return firewall;
    case 'css':
      return css;
    case 'html':
      return html;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'mysql':
      return mysql;
    case 'java':
      return java;
    case 'aws':
      return aws;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'nginx':
      return nginx;
    case 'gcp':
      return gcp;
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    case 'cloudflare':
      return cloudflare;
    default:
      break;
  }
}
