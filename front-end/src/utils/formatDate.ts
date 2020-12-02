const formatDate = (value: Date): any => {
  Intl.DateTimeFormat('pt-BR').format(new Date(value));
}

export default formatDate;
