import Classes from "./Classes";

function App(){
  const palavras_chave = [
    {
      palavra: "linux"
    },
    {
      palavra: "docker"
    },
    {
      palavra: "server"
    },
    {
      palavra: "rails"
    },
    {
      palavra: "douane"
    },
    {
      palavra: "my-developments"
    },
    {
      palavra: "command-line"
    },
    {
      palavra: "ruby"
    },
    {
      palavra: "c-2"
    },
    {
      palavra: "linux-on-mac"
    },
    {
      palavra: "maintenance"
    },
    {
      palavra: "security"
    },
    {
      palavra: "gnome"
    },
    {
      palavra: "kubernetes"
    },
    {
      palavra: "mes-developpements"
    },
    {
      palavra: "ubuntu"
    },
    {
      palavra: "python"
    },
    {
      palavra: "vcs"
    },
    {
      palavra: "capybara"
    },
    {
      palavra: "contribution"
    },
    {
      palavra: "git"
    },
    {
      palavra: "apt"
    },
    {
      palavra: "bazaar"
    },
    {
      palavra: "chef"
    },
    {
      palavra: "cucumber"
    },
    {
      palavra: "debian"
    },
    {
      palavra: "game"
    },
    {
      palavra: "howto"
    },
    {
      palavra: "packaging"
    },
    {
      palavra: "testing"
    },
    {
      palavra: "boost"
    },
    {
      palavra: "debug"
    },
    {
      palavra: "devise"
    },
    {
      palavra: "elixir"
    },
    {
      palavra: "gtk"
    },
    {
      palavra: "homebrew"
    },
    {
      palavra: "information"
    },
    {
      palavra: "ssh"
    },
    {
      palavra: "tuxtremsplit"
    },
    {
      palavra: "xpath"
    },
  ]

  return(
    <div className="caixa">
      {palavras_chave.map ((tudo) => {
        return <Classes
                palavra={tudo.palavra}
                />
      })
    }
    </div>
  )
}
export default App;