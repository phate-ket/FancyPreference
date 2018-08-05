import React, {Component} from 'react';

class Preference extends Component {
  state = {
    languages: [],
    timezone: [],
    currency: [],

    selectedLanguage: undefined,
    selectedTimezone: undefined,
    selectedCurrency: undefined,
    visibility: 'public',
    message: 'follow',
    categoryList: 'enable'
  };

  constructor() {
    super();
    this.languageSelect = this.languageSelect.bind(this);
    this.timezoneSelect = this.timezoneSelect.bind(this);
    this.currencySelect = this.currencySelect.bind(this);
    this.visibilityChange = this.visibilityChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.savePreferences = this.savePreferences.bind(this);
  }

  languageSelect(event) {
    this.setState({selectedLanguage: event.target.value})
  }

  timezoneSelect(event) {
    this.setState({selectedTimezone: event.target.value})
  }

  currencySelect(event) {
    this.setState({selectedCurrency: event.target.value})
  }

  visibilityChange(event) {
    this.setState({visibility: event.target.value});
  }

  messageChange(event) {
    this.setState({message: event.target.value});
  }

  categoryChange(event) {
    this.setState({categoryList: event.target.value});
  }

  deleteAlert() {
    alert('Your history is cleared')
  }

  savePreferences = (e) => {
    e.preventDefault();
    fetch('/users/save_preferences', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.props.user.username,
        selectedLanguage: this.state.selectedLanguage,
        selectedTimezone: this.state.selectedTimezone,
        selectedCurrency: this.state.selectedCurrency,
        visibility: this.state.visibility,
        message: this.state.message,
        categoryList: this.state.categoryList
      })
    }).then(res => res.json())
      .then(CommandResult =>alert('ok: ' + CommandResult.ok))
  };

  componentDidMount() {
    fetch('/localize/languages')
      .then(res => res.json())
      .then(languages => this.setState({languages}));
    fetch('/localize/timezone')
      .then(res => res.json())
      .then(timezone => this.setState({timezone}));
    fetch('/localize/currency')
      .then(res => res.json())
      .then(currency => this.setState({currency}));
  }



  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.user && nextProps.user.preferences) {
      let pref = nextProps.user.preferences;
      if(pref.selectedLanguage)this.setState({selectedLanguage: pref.selectedLanguage});
      if(pref.selectedTimezone)this.setState({selectedTimezone: pref.selectedTimezone});
      if(pref.selectedCurrency)this.setState({selectedCurrency: pref.selectedCurrency});
      if(pref.visibility)this.setState({visibility: pref.visibility});
      if(pref.message)this.setState({message: pref.message});
      if(pref.categoryList)this.setState({categoryList: pref.categoryList});
    }
  }

  render() {
    return (
      <div className={'card'}>
        <div className={'form-block'}><h5>Edit Preferences</h5></div>
        <form onSubmit={this.savePreferences}>
          <div className="row form-block">
            <div className="col-sm-2">Localization</div>
            <div className="form-group col-sm-5">
              <div className="form-group">
                <label htmlFor="lang" className="bold-label">Language</label>
                <select id={'lang'} className="form-control" onChange={this.languageSelect} value={this.state.selectedLanguage}>
                  {this.state.languages.map(lang =>
                    <option value={lang.id} key={lang.id}>{lang.language}</option>
                  )}
                </select>
                <p className="text-sub">Interested in helping translate Fancy? <a href="#">Let us know.</a></p>
              </div>
              <div className="form-group">
                <label htmlFor="time" className="bold-label">Time zone</label>
                <select id={'time'} className="form-control" onChange={this.timezoneSelect} value={this.state.selectedTimezone}>
                  {this.state.timezone.map(time =>
                    <option value={time.value} key={time.id}>{time.timezone}</option>
                  )}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="currency" className="bold-label">Currency</label>
                <select id={'currency'} className="form-control" onChange={this.currencySelect} value={this.state.selectedCurrency}>
                  {this.state.currency.map(curr =>
                    <option value={curr.id} key={curr.id}>{curr.currency}</option>
                  )}
                </select>
              </div>
            </div>
          </div>
          <div className="row form-block">
            <div className="col-sm-2">Privacy</div>
            <div className="form-group col">
              {/*<div className="row">*/}
              <div className="form-group">
                <label className="bold-label">Profile visibility</label><br/>
                <p className="text-sub">Manage who can see your activity, things you fancy, your followers,
                  people you follow or in anyone search result.</p>
                {/*</div>*/}
                {/*<div className="row">*/}
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="vis-1" name="visibility" value="public"
                         checked={this.state.visibility === 'public'} onChange={this.visibilityChange}/>
                  <label htmlFor={'vis-1'} className="custom-control-label">Everyone</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="vis-2" name="visibility" value="private"
                         checked={this.state.visibility === 'private'} onChange={this.visibilityChange}/>
                  <label htmlFor={'vis-2'} className="custom-control-label"><i className="fas fa-lock"/> private</label>
                </div>
              </div>
              {/*</div>*/}

              <div className="form-group">
                <label className="bold-label">Messages</label><br/>
                <p className="text-sub">Control who can send you messages.</p>
                {/*</div>*/}
                {/*<div className="row">*/}
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="mes-1" name="message" value="everyone"
                         checked={this.state.message === 'everyone'} onChange={this.messageChange}/>
                  <label htmlFor={'mes-1'} className="custom-control-label">Everyone</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="mes-2" name="message" value="follow"
                         checked={this.state.message === 'follow'} onChange={this.messageChange}/>
                  <label htmlFor={'mes-2'} className="custom-control-label">People you follow</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="mes-3" name="message" value="none"
                         checked={this.state.message === 'none'} onChange={this.messageChange}/>
                  <label htmlFor={'mes-3'} className="custom-control-label"><i className="fas fa-lock"/> No one</label>
                </div>
                <br/>
              </div>
              <div className="form-group">
                <label className="bold-label">Recently viewed</label>
                <p className="text-sub">Manage your fancy browsing history.</p>
                <a href="#" onClick={this.deleteAlert}>Delete all items</a>
              </div>
            </div>
          </div>
          <div className="row form-block">
            <div className="col-sm-2">Content</div>
            <div className="form-group col">
              {/*<div className="row">*/}
              <label className="bold-label">Category lists</label><br/>
              <p className="text-sub">Automatically add Fancy'd items to category list</p>
              {/*</div>*/}
              {/*<div className="row">*/}
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" id="cat-1" name="category" value="enable"
                       checked={this.state.categoryList === 'enable'} onChange={this.categoryChange}/>
                <label htmlFor={'cat-1'} className="custom-control-label">Enable</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" id="cat-2" name="category" value="disable"
                       checked={this.state.categoryList === 'disable'} onChange={this.categoryChange}/>
                <label htmlFor={'cat-2'} className="custom-control-label">Disable</label>
              </div>
              {/*</div>*/}
            </div>
          </div>
          <div className="row form-block" style={{padding: '5px'}}/>
          <div className="row form-block" style={{float: 'right'}}>
            <button type="submit" className="btn btn-primary">Save Preferences</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Preference;