import React, { useState, FormEvent } from "react";
import { phoneMask } from "utils/masks/phoneMask";

interface ErrorHandler {
  name: boolean;
  email: boolean;
  phone: boolean;
  confirm: boolean;
}

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);
  const [error, setError] = useState<ErrorHandler>({
    name: false,
    email: false,
    phone: false,
    confirm: false,
  });
  const [success, setSuccess] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (name && email && phone.length > 13 && confirm) {
        setSuccess(true);
      } else {
        throw new Error();
      }
    } catch (error) {
      setError({
        name: !name,
        email: !email,
        phone: phone.length > 13 ? false : true,
        confirm: !confirm,
      });
    }
  };

  return (
    <section className="w-full min-h-auto p-4">
      <div className="flex flex-col h-auto p w-full">
        <b className="text-white text-3xl md:text-4xl pb-2">Tem interesse?</b>
        {success || (
          <p className="text-white text-lg">
            Preencha o formulário abaixo que entraremos em contato, ou envie uma
            mensagem diretamente para o nosso WhatsApp!
          </p>
        )}
        {success ? (
          <p className="text-white text-lg">
            Obrigado! Em breve entraremos em contato com você!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="max-w-2xl py-3 px-5 m-auto w-full mt-10">
              <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
                <div className="col-span-2">
                  <input
                    type="text"
                    className="bg-gray-100 border-solid rounded-lg border-gray-400 border-2 p-3 md:text-xl w-full"
                    placeholder="Seu nome"
                    maxLength={64}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setError({ ...error, name: false });
                    }}
                  />
                  {error.name && (
                    <p className="text-red-400 py-1">Insira um nome</p>
                  )}
                </div>

                <div className="col-span-2">
                  <input
                    type="text"
                    className="bg-gray-100 border-solid rounded-lg border-gray-400 border-2 p-3 md:text-xl w-full"
                    placeholder="Email"
                    maxLength={64}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError({ ...error, email: false });
                    }}
                  />
                  {error.email && (
                    <p className="text-red-400 py-1">Insira seu Email</p>
                  )}
                </div>

                <div className="col-span-2">
                  <input
                    type="text"
                    className="bg-gray-100 border-solid rounded-lg border-gray-400 border-2 p-3 md:text-xl w-full"
                    placeholder="Número de telefone"
                    maxLength={15}
                    value={phone}
                    onChange={(e) => {
                      setPhone(phoneMask(e.target.value));
                      setError({ ...error, phone: false });
                    }}
                  />
                  {error.phone && (
                    <p className="text-red-400 py-1">
                      Insira um número de telefone válido
                    </p>
                  )}
                </div>

                <div className="col-span-2">
                  <label className="inline-flex items-center mt-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-green-600"
                      onChange={() => {
                        setConfirm(!confirm);
                        setError({ ...error, confirm: false });
                      }}
                    />
                    <span className="ml-2 text-white">
                      Quero ganhar dinheiro com futebol!
                    </span>
                  </label>
                  {error.confirm && (
                    <p className="text-red-400 py-1">
                      Confirme que você quer ganhar!
                    </p>
                  )}
                </div>

                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className="py-3 px-6 bg-green-500 hover:bg-green-700 active:bg-green-900 rounded-lg text-white font-bold w-full sm:w-32"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
