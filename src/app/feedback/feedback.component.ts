import { Component, OnInit } from '@angular/core';

type Msg = {
  id: string;
  from: 'bot' | 'user';
  text: string;
  options?: string[];
  metadata?: any;
};

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  isOpen = false;        
  userInput: string = '';
  messages: Msg[] = [];
  username: string = '';
  answers: { [k: string]: any } = {};

  // Script questions
  script = [
    { id: 'q0', text: 'Welcome! May I know your name?', type: 'text' },
    { id: 'q1', text: 'How difficult did you find this assessment?', type: 'options', options: ['Simple 👍', 'Moderate 🤔', 'Difficult 🔥'] },
    { id: 'q2', text: 'How would you rate this platform?', type: 'options', options: ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐'] },
    { id: 'q3', text: 'How can we improve your experience?', type: 'text' },
    { id: 'end', text: 'Thanks for your feedback! 🎉', type: 'none' }
  ];

  ngOnInit() {
    this.botSay(this.script[0]);
  }

  toggleChat() {
    this.isOpen = !this.isOpen;

    if (this.isOpen && this.messages.length === 0) {
      this.botSay(this.script[0]);
    }
  }

  async botSay(item: any) {
    let text = item.text;

    if (this.username && item.id !== 'q0' && item.id !== 'end') {
      text = `Hi ${this.username}, ${text}`;
    }

    this.messages.push({
      id: 'bot-' + item.id,
      from: 'bot',
      text,
      options: item.options,
      metadata: { scriptId: item.id }
    });
  }

  async sendText() {
    const txt = this.userInput.trim();
    if (!txt) return;

    const scriptId = this.getPendingScriptId() || 'free';

    if (scriptId === 'q0') {
      this.username = txt;
    }

    this.messages.push({
      id: 'user-' + Math.random(),
      from: 'user',
      text: txt,
      metadata: { scriptId }
    });

    this.answers[scriptId] = txt;
    this.userInput = '';

    this.advance(scriptId);
  }

  async onQuickReply(option: string, msg: Msg) {
    this.messages.push({
      id: 'user-' + Math.random(),
      from: 'user',
      text: option,
      metadata: msg.metadata
    });

    this.answers[msg.metadata.scriptId] = option;
    this.advance(msg.metadata.scriptId);
  }

  private getPendingScriptId(): string | null {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      const m = this.messages[i];
      if (m.from === 'bot' && m.metadata?.scriptId && !this.answers[m.metadata.scriptId]) {
        return m.metadata.scriptId;
      }
    }
    return null;
  }

  private advance(currentId?: string) {
    const idx = this.script.findIndex(s => s.id === currentId);
    const next = this.script[idx + 1];
    if (!next) return;

    this.botSay(next).then(() => {
      if (next.id === 'end') {
        setTimeout(() => {
          this.isOpen = false;
          this.reset();
        }, 1500);
      }
    });
  }

  private reset() {
    this.messages = [];
    this.userInput = '';
    this.username = '';
    this.answers = {};
  }
}
