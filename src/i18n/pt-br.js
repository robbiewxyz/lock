export default {
  error: {
    forgotPassword: {
      "too_many_requests": "Você atingiu o limite máximo de tentativas. Por favor aguarde antes de tentar novamente.",
      "lock.fallback": "Sentimos muito, mas algo deu errado ao requisitar a mudança de senha."
    },
    login: {
      "blocked_user": "O usuário está bloqueado.",
      "invalid_user_password": "Credenciais inválidas.",
      "lock.fallback": "Sentimos muito, mas algo deu errado ao tentar entrar.",
      "lock.invalid_code": "Código inválido.",
      "lock.invalid_email_password": "Email ou senha inválidos.",
      "lock.invalid_username_password": "Usuário ou senha inválidos.",
      "lock.network": "Não foi possível acessar o servidor. Por favor verifique sua conexão e tente novamente.",
      "lock.popup_closed": "Popup fechada. Tente novamente.",
      "lock.unauthorized": "Permissões não foram concedidas. Tente novamente.",
      "password_change_required": "Você precisa atualizar sua senha porque é seu primeiro login, ou porque sua senha expirou.",
      "password_leaked": "Esse login está bloqueado porque sua senha foi vazada em outro website. Nós lhe enviamos um email com instruções sobre como desbloqueá-lo.",
      "too_many_attempts": "A sua conta foi bloqueada após várias tentativas de login consecutivas." // needs review
    },
    passwordless: {
      "bad.email": "O email é inválido",
      "bad.phone_number": "O número de telefone é inválido",
      "lock.fallback": "Sentimos muito, algo deu errado"
    },
    signUp: {
      "invalid_password": "A senha é inválida.", // needs review
      "lock.fallback": "Sentimos muito, algo deu errado ao tentar se inscrever.",
      "password_dictionary_error": "A senha é muito comum.", // needs review
      "password_no_user_info_error": "A senha é baseado em informações do usuário.", // needs review
      "password_strength_error": "A senha é muito fraca.",
      "user_exists": "O usuário já existe.",
      "username_exists": "O nome de usuário já existe."
    }
  },
  success: {
    logIn: "Obrigado por fazer login.",
    forgotPassword: "Acabamos de enviar um email para resetar sua senha.",
    magicLink: "Nós enviamos um link para fazer login<br />em %s.",
    signUp: "Obrigado por se inscrever."
  },
  blankErrorHint: "Não pode ser em branco",
  codeInputPlaceholder: "seu código",
  databaseEnterpriseLoginInstructions: "",
  databaseEnterpriseAlternativeLoginInstructions: "ou",
  databaseSignUpInstructions: "",
  databaseAlternativeSignUpInstructions: "ou",
  emailInputPlaceholder: "seu@exemplo.com",
  enterpriseLoginIntructions: "Entre com suas credenciais corporativas.",
  enterpriseActiveLoginInstructions: "Por favor entre com suas credenciais corporativas em %s.",
  failedLabel: "Falha!",
  forgotPasswordAction: "Esqueceu sua senha?",
  forgotPasswordInstructions: "Por favor digite seu endereço de email. Enviarmos um email para resetar sua senha.",
  forgotPasswordSubmitLabel: "Enviar email",  // needs review
  invalidErrorHint: "Inválido",
  lastLoginInstructions: "Na última vez você entrou com",
  loginAtLabel: "Login em %s",
  loginLabel: "Login",
  loginSubmitLabel: "Log in", // needs review
  loginWithLabel: "Login com %s",
  notYourAccountAction: "Não é sua conta?",
  passwordInputPlaceholder: "sua senha",
  passwordStrength: {
    containsAtLeast: "Contenha no mínimo %d dos seguintes %d tipos de caracteres:",
    identicalChars: "Não mais de %d caracteres idênticos em sequência (ex: \"%s\" não é permitido)",
    nonEmpty: "Senha não pode ser em branco",
    numbers: "Números (0-9)",
    lengthAtLeast: "No mínimo %d caracteres",
    lowerCase: "Letras minúsculas (a-z)",
    shouldContain: "Deve conter:",
    specialCharacters: "Caracteres especiais (ex: !@#$%^&*)",
    upperCase: "Letras maiúsculas (A-Z)"
  },
  passwordlessEmailAlternativeInstructions: "Senão, digite seu email para entrar<br/>ou criar uma conta",
  passwordlessEmailCodeInstructions: "Um email com o código foi enviado para %s.",
  passwordlessEmailInstructions: "Digite seu email para entrar<br/>ou criar uma conta",
  passwordlessSMSAlternativeInstructions: "Senão, digite seu telefone para entrar<br/>ou criar uma conta",
  passwordlessSMSCodeInstructions: "Um SMS com o código foi enviado<br/>para %s.",
  passwordlessSMSInstructions: "Digite seu telefone para entrar<br/>ou criar uma conta",
  phoneNumberInputPlaceholder: "seu número de telefone",
  resendCodeAction: "Não recebeu o código?",
  resendLabel: "Reenviar",
  resendingLabel: "Reenviando...",
  retryLabel: "Tentar novamente",
  sentLabel: "Enviado!",
  signUpLabel: "Inscrever",
  signUpSubmitLabel: "Inscrever", // needs review
  signUpTerms: "",
  signUpWithLabel: "Inscreva-se com %s",
  socialLoginInstructions: "",
  socialSignUpInstructions: "",
  ssoEnabled: "Single Sign-On habilitado",
  submitLabel: "Enviar", // needs review
  unrecoverableError: "Algo deu errado.<br />Por favor entre em contato com o suporte.",
  usernameFormatErrorHint: "Use 1-15 letras, números e \"_\"",
  usernameInputPlaceholder: "seu nome de usuário",
  usernameOrEmailInputPlaceholder: "usuário/email",
  title: "Auth0",
  welcome: "Bem-vindo a %s!",
  windowsAuthInstructions: "Você está conectado da sua rede corporativa&hellip;",
  windowsAuthLabel: "Autenticação Windows"
};
