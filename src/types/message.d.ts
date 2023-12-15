interface MyMessage {
  id: string;
  content: any;
}

interface MyItemMessage extends MyMessage {
  id: "item";
  content: string[];
}
