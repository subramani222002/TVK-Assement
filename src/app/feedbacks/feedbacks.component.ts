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
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  isOpen = true;
  userInput = '';
  messages: Msg[] = [];       // ONLY chat messages
  username: string = '';
  answers: any = {};

  // QUESTIONS → renamed to script
  script = [
    { id: 'q0', text: 'Welcome! May I know your name?', type: 'text' },
    { id: 'q1', text: 'How difficult was this assessment?', type: 'options',
      options: ['Simple 👍', 'Moderate 🤔', 'Difficult 🔥'] },
    { id: 'q2', text: 'How would you rate this platform?', type: 'options',
      options: ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐'] },
    { id: 'q3', text: 'How can we improve your experience?', type: 'text' },
    { id: 'end', text: 'Thanks for your feedback! 🎉', type: 'none' }
  ];

  ngOnInit() {
    this.botSay(this.script[0]);
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  closeChat() {
    this.isOpen = false;
  }

  goToFeedback() {
    console.log('Opening feedback page...');
  }

  private async botSay(item: any) {
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

  sendText() {
    const text = (this.userInput || '').trim();
    if (!text) return;

    const scriptId = this.getPendingScript() || 'free';

    if (scriptId === 'q0') this.username = text;

    this.messages.push({
      id: 'user-' + Math.random(),
      from: 'user',
      text,
      metadata: { scriptId }
    });

    this.answers[scriptId] = text;
    this.userInput = '';
    this.next(scriptId);
  }

  onQuickReply(opt: string, msg: Msg) {
    this.messages.push({
      id: 'user-' + Math.random(),
      from: 'user',
      text: opt,
      metadata: msg.metadata
    });

    this.answers[msg.metadata.scriptId] = opt;
    this.next(msg.metadata.scriptId);
  }

  private getPendingScript(): string | null {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      const m = this.messages[i];
      if (m.from === 'bot' && m.metadata?.scriptId &&
          !this.answers[m.metadata.scriptId]) {
        return m.metadata.scriptId;
      }
    }
    return null;
  }

  private next(currentId: string) {
    const index = this.script.findIndex(s => s.id === currentId);
    const nextItem = this.script[index + 1];

    if (!nextItem) return;

    this.botSay(nextItem).then(() => {
      if (nextItem.id === 'end') {
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
