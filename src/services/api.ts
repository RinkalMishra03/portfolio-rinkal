/**
 * Service to handle communicating with the Express backend APIs
 */

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const apiService = {
  /**
   * Submits a message from the Contact section
   */
  async submitContact(payload: ContactPayload) {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) {
      throw new Error("Failed to submit message to system core.");
    }
    
    return await response.json();
  },

  /**
   * Fetches admin messages feed
   */
  async getAdminMessages() {
    const response = await fetch("/api/admin/messages");
    if (!response.ok) {
      throw new Error("Failed to fetch administrative feeds.");
    }
    return await response.json();
  }
};
