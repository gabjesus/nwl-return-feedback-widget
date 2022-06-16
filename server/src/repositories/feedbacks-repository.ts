export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

// Esse cara é o contrato, diz quais as operações podem ser usadas, mas não são implementações
export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}
