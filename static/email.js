// The contact address is written into the page as "name [at] host [dot] tld",
// which the crudest address harvesters do not recognise. This turns each one
// into an ordinary mail link. Without JavaScript the written form stays, and
// can still be read and typed.
for (const link of document.querySelectorAll("a.email")) {
  const address = `${link.dataset.user}@${link.dataset.host}`;
  const subject = link.dataset.subject;
  link.href = `mailto:${address}` + (subject ? `?subject=${encodeURIComponent(subject)}` : "");
  link.textContent = address;
}
